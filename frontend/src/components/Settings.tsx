import React, { useState } from 'react';
import { PreparationType, Profile, StartMode, State, SrsSettings, TargetedStartChoice } from '../types';
import { topics, concepts, exercises, tests } from '../content';
import {
  normalizeSrsSettings,
  DEFAULT_SRS_SETTINGS,
  exportProgress,
  importProgress,
  applySrsPreferences
} from '../systems';
import {
  defaultGradeBandForPreparation,
  firstTopicForProfile,
  formatGradeBand,
  GRADE_BANDS,
  PREPARATION_LABELS,
  START_MODE_LABELS,
  topicsForBand,
  topicsForExam
} from '../startModes';

interface SettingsProps {
  state: State;
  navigate: (page: string, id?: string) => void;
  updateState: (updater: (prev: State) => State) => void;
  onReset: () => void;
  showToast: (message: string) => void;
}

export const Settings: React.FC<SettingsProps> = ({
  state,
  navigate,
  updateState,
  onReset,
  showToast
}) => {
  const [activeTab, setActiveTab] = useState<'general' | 'srs'>('general');
  const [transferCode, setTransferCode] = useState("");

  const srs = normalizeSrsSettings(state.preferences?.srs);
  const startMode = state.profile.startMode || 'full-course';
  const targetTopicId = state.profile.targetTopicId && topics[state.profile.targetTopicId]
    ? state.profile.targetTopicId
    : firstTopicForProfile(state.profile);

  const handleExport = () => {
    try {
      const code = exportProgress(state);
      setTransferCode(code);
      showToast("Progresas eksportuotas! Nukopijuokite kodą iš teksto laukelio.");
    } catch (err) {
      showToast("Eksportuoti nepavyko.");
    }
  };

  const handleImport = () => {
    if (!transferCode.trim()) {
      showToast("Įklijuokite eksportuotą kodą.");
      return;
    }
    try {
      const importedState = importProgress(transferCode.trim());
      updateState(() => importedState);
      showToast("Progresas sėkmingai importuotas!");
      setTransferCode("");
      navigate("dashboard");
    } catch (err: any) {
      showToast(err.message || "Netinkamas importavimo kodas.");
    }
  };

  const handleResetProgress = () => {
    if (window.confirm("Ar tikrai norite ištrinti visą progresą? Šis veiksmas yra neatkuriamas.")) {
      onReset();
      showToast("Vietinis progresas ištrintas.");
    }
  };

  // Update specific SRS fields
  const updateSrsSetting = (field: keyof SrsSettings, value: any) => {
    updateState((prev) => {
      const currentSrs = prev.preferences?.srs || normalizeSrsSettings();
      const updatedSrs = normalizeSrsSettings({
        ...currentSrs,
        [field]: value
      });
      const preferences = {
        ...prev.preferences,
        srs: updatedSrs
      };
      return {
        ...prev,
        preferences,
        srsCards: applySrsPreferences(prev.srsCards, updatedSrs)
      };
    });
  };

  // Update card types
  const updateCardTypeToggle = (type: string, enabled: boolean) => {
    updateState((prev) => {
      const currentSrs = prev.preferences?.srs || normalizeSrsSettings();
      const enabledCardTypes = {
        ...currentSrs.enabledCardTypes,
        [type]: enabled
      };
      const updatedSrs = normalizeSrsSettings({
        ...currentSrs,
        enabledCardTypes
      });
      const preferences = {
        ...prev.preferences,
        srs: updatedSrs
      };
      return {
        ...prev,
        preferences,
        srsCards: applySrsPreferences(prev.srsCards, updatedSrs)
      };
    });
  };

  const handleResetSrsDefaults = () => {
    updateState((prev) => {
      const preferences = {
        ...prev.preferences,
        srs: DEFAULT_SRS_SETTINGS
      };
      return {
        ...prev,
        preferences,
        srsCards: applySrsPreferences(prev.srsCards, DEFAULT_SRS_SETTINGS)
      };
    });
    showToast("Atkurti numatytieji SRS nustatymai.");
  };

  const updateGoalMode = (patch: Partial<{
    startMode: StartMode;
    preparationType: PreparationType;
    targetedStartChoice: TargetedStartChoice;
    gradeBand: string;
    targetTopicId: string;
  }>) => {
    updateState((prev) => {
      const nextProfile: Profile = {
        ...prev.profile,
        ...patch
      };

      if (patch.startMode) {
        nextProfile.olympiad = patch.startMode === 'olympiad';
        nextProfile.diagnostic = patch.startMode === 'full-course';
        if (patch.startMode === 'full-course') {
          nextProfile.goal = 'Nežinau nuo ko pradėti';
          nextProfile.preparationType = undefined;
          nextProfile.targetedStartChoice = 'diagnostic';
          nextProfile.targetTopicId = '';
        }
        if (patch.startMode === 'olympiad') {
          nextProfile.goal = 'Noriu sustiprinti matematiką';
          nextProfile.preparationType = undefined;
          nextProfile.targetedStartChoice = 'topic';
          nextProfile.targetTopicId = '';
          nextProfile.targetTopicId = firstTopicForProfile(nextProfile);
        }
        if (patch.startMode === 'targeted') {
          nextProfile.goal = 'Ruošiuosi kontroliniui arba egzaminui';
          nextProfile.preparationType = nextProfile.preparationType || 'control';
          nextProfile.targetedStartChoice = nextProfile.preparationType === 'control' ? 'topic' : 'diagnostic';
          nextProfile.diagnostic = nextProfile.targetedStartChoice === 'diagnostic';
          nextProfile.targetTopicId = '';
          nextProfile.targetTopicId = nextProfile.targetedStartChoice === 'topic'
            ? firstTopicForProfile(nextProfile)
            : '';
        }
      }

      if (patch.preparationType) {
        nextProfile.gradeBand = defaultGradeBandForPreparation(patch.preparationType);
        nextProfile.targetedStartChoice = patch.preparationType === 'control' ? 'topic' : 'diagnostic';
        nextProfile.diagnostic = nextProfile.targetedStartChoice === 'diagnostic';
        nextProfile.targetTopicId = '';
      }

      if (patch.targetedStartChoice) {
        nextProfile.diagnostic = patch.targetedStartChoice === 'diagnostic';
        if (patch.targetedStartChoice === 'topic' && !nextProfile.targetTopicId) {
          nextProfile.targetTopicId = firstTopicForProfile(nextProfile);
        }
      }

      if (patch.gradeBand && !patch.targetTopicId) {
        nextProfile.targetTopicId = topicsForBand(patch.gradeBand)[0]?.id || prev.activeTopicId;
      }

      const activeTopicId = nextProfile.targetTopicId && topics[nextProfile.targetTopicId]
        ? nextProfile.targetTopicId
        : (firstTopicForProfile(nextProfile) || prev.activeTopicId);

      return {
        ...prev,
        profile: {
          ...nextProfile,
          grade: topics[activeTopicId]?.grade || prev.profile.grade
        },
        activeTopicId
      };
    });
    showToast("Pradžios režimas atnaujintas. Progresas nepakeistas.");
  };

  const enabledCards = state.srsCards.filter(
    (card) => card.enabled && srs.enabledCardTypes[card.cardType] !== false && card.queue !== "suspended"
  ).length;

  const typeLabels: Record<string, string> = {
    concept: "Sąvokos",
    formula: "Formulės",
    mistake: "Tipinės klaidos",
    method: "Metodai",
    practice: "Praktikos kortelės"
  };

  return (
    <div className="settings-shell">
      <div className="settings-tabs" role="tablist" aria-label="Nustatymų skyriai">
        <button
          className={activeTab === 'general' ? 'active' : ''}
          onClick={() => setActiveTab('general')}
          type="button"
        >
          Bendra
        </button>
        <button
          className={activeTab === 'srs' ? 'active' : ''}
          onClick={() => setActiveTab('srs')}
          type="button"
        >
          SRS planuoklis
        </button>
      </div>

      {activeTab === 'general' ? (
        <div className="grid">
          <section className="panel wide">
            <span className="eyebrow">Pradžios režimas</span>
            <h2>Keisk startą neprarasdamas progreso</h2>
            <p className="lead">
              Šis pasirinkimas keičia pagrindinio ekrano rekomendacijas ir pirmą siūlomą veiksmą. Jis neištrina diagnostikos, SRS kortelių, testų ar išspręstų uždavinių.
            </p>
            <div className="settings-choice-grid">
              {(['olympiad', 'targeted', 'full-course'] as StartMode[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  className={startMode === mode ? 'selected' : ''}
                  onClick={() => updateGoalMode({ startMode: mode })}
                >
                  <strong>{START_MODE_LABELS[mode]}</strong>
                  <small>
                    {mode === 'olympiad' && 'Sunkesni uždaviniai, laisvos aukštesnės pakopos.'}
                    {mode === 'targeted' && 'Kontrolinis, PUPP arba VBE su tema ar diagnostika.'}
                    {mode === 'full-course' && 'Pilnas kursas, diagnostika ir automatinis planas.'}
                  </small>
                </button>
              ))}
            </div>

            {startMode === 'olympiad' && (
              <div className="settings-inline-controls">
                <label>Pradinis olimpiadinio kelio lygis
                  <select
                    value={state.profile.gradeBand}
                    onChange={(e) => updateGoalMode({ gradeBand: e.target.value })}
                  >
                    {GRADE_BANDS.map((band) => (
                      <option key={band.value} value={band.value}>{band.label}</option>
                    ))}
                  </select>
                </label>
                <p className="muted">Dabar: {formatGradeBand(state.profile.gradeBand)}. Aukštesnės temos lieka pasiekiamos.</p>
              </div>
            )}

            {startMode === 'targeted' && (
              <div className="settings-inline-controls">
                <label>Pasiruošimo tipas
                  <select
                    value={state.profile.preparationType || 'control'}
                    onChange={(e) => updateGoalMode({ preparationType: e.target.value as PreparationType })}
                  >
                    {(['control', 'pupp', 'vbe'] as PreparationType[]).map((type) => (
                      <option key={type} value={type}>{PREPARATION_LABELS[type]}</option>
                    ))}
                  </select>
                </label>
                {(state.profile.preparationType === 'pupp' || state.profile.preparationType === 'vbe') && (
                  <label>Pradėti nuo
                    <select
                      value={state.profile.targetedStartChoice || 'diagnostic'}
                      onChange={(e) => updateGoalMode({ targetedStartChoice: e.target.value as TargetedStartChoice })}
                    >
                      <option value="diagnostic">Rekomenduojama diagnostika</option>
                      <option value="topic">Konkreti tema</option>
                    </select>
                  </label>
                )}
                {(state.profile.preparationType === 'control' || state.profile.targetedStartChoice === 'topic') && (
                  <label>Pasirinkta tema
                    <select
                      value={targetTopicId}
                      onChange={(e) => updateGoalMode({ targetTopicId: e.target.value })}
                    >
                      {topicsForExam(state.profile.preparationType).map((topic) => (
                        <option key={topic.id} value={topic.id}>{topic.title}</option>
                      ))}
                    </select>
                  </label>
                )}
              </div>
            )}
          </section>

          <section className="panel wide">
            <span className="eyebrow">Perkėlimas be paskyros</span>
            <h2>Eksportuok arba importuok progresą</h2>
            <textarea
              value={transferCode}
              onChange={(e) => setTransferCode(e.target.value)}
              placeholder="Čia atsiras eksportavimo kodas arba įklijuok importo kodą"
            />
            <div className="actions">
              <button className="primary" onClick={handleExport}>Eksportuoti</button>
              <button onClick={handleImport}>Importuoti</button>
            </div>
          </section>

          <section className="panel">
            <span className="eyebrow">Turinys</span>
            <h3>{Object.keys(topics).length} temos</h3>
            <p>
              {Object.keys(concepts).length} sąvokos, {exercises.length} užduočių, {tests.length} testų.
              Turinys veikia lokaliai ir yra saugomas naršyklėje.
            </p>
          </section>

          <section className="panel danger-zone">
            <span className="eyebrow">Sesija</span>
            <h3>Pradėti iš naujo</h3>
            <p>Ištrina progresą šiame įrenginyje ir vėl parodo onboardingą. Perkėlimo kodai kituose įrenginiuose neliečiami.</p>
            <button className="danger-button" onClick={handleResetProgress}>Ištrinti vietinį progresą</button>
          </section>
        </div>
      ) : (
        <div className="grid">
          <section className="panel wide">
            <span className="eyebrow">SRS algoritmas</span>
            <h2>SM-2 dabar, FSRS vėliau</h2>
            <p className="lead">
              MVP naudoja lengvą Anki stiliaus SM-2 planuoklį. Visa logika eina per planuoklio sąsają, todėl vėliau galima pridėti FSRS neperrašant kortelių rodymo, saugyklos ar įsitraukimo taisyklių.
            </p>
            <p className="muted">
              {enabledCards} aktyvios kortelės. Naujos kortelės atsiranda tik po sąvokos paspaudimo, teorijos pažymėjimo arba susijusio uždavinio bandymo.
            </p>
          </section>

          <section className="panel wide srs-settings-grid">
            <label htmlFor="srs-daily-new">Naujos kortelės per dieną
              <input
                id="srs-daily-new"
                name="srs-daily-new"
                type="number"
                min="0"
                step="1"
                value={srs.dailyNewLimit}
                onChange={(e) => updateSrsSetting('dailyNewLimit', Number(e.target.value))}
              />
            </label>
            <label htmlFor="srs-daily-review">Kartojimai per dieną
              <input
                id="srs-daily-review"
                name="srs-daily-review"
                type="number"
                min="0"
                step="1"
                value={srs.dailyReviewLimit}
                onChange={(e) => updateSrsSetting('dailyReviewLimit', Number(e.target.value))}
              />
            </label>
            <label htmlFor="srs-learning-steps">Mokymosi žingsniai minutėmis
              <input
                id="srs-learning-steps"
                name="srs-learning-steps"
                value={srs.learningStepsMinutes.join(", ")}
                onChange={(e) => {
                  const arr = e.target.value.split(',').map((x) => Number(x.trim())).filter((x) => !isNaN(x) && x > 0);
                  updateSrsSetting('learningStepsMinutes', arr);
                }}
              />
            </label>
            <label htmlFor="srs-graduating-interval">Baigimo intervalas dienomis
              <input
                id="srs-graduating-interval"
                name="srs-graduating-interval"
                type="number"
                min="1"
                step="1"
                value={srs.graduatingIntervalDays}
                onChange={(e) => updateSrsSetting('graduatingIntervalDays', Number(e.target.value))}
              />
            </label>
            <label htmlFor="srs-maximum-interval">Maksimalus intervalas dienomis
              <input
                id="srs-maximum-interval"
                name="srs-maximum-interval"
                type="number"
                min="1"
                step="1"
                value={srs.maximumIntervalDays}
                onChange={(e) => updateSrsSetting('maximumIntervalDays', Number(e.target.value))}
              />
            </label>
          </section>

          <section className="panel">
            <span className="eyebrow">Kortelių tipai</span>
            <div className="checkbox-group">
              {Object.entries(typeLabels).map(([key, label]) => (
                <label key={key} className="check" htmlFor={`srs-type-${key}`}>
                  <input
                    id={`srs-type-${key}`}
                    name={`srs-type-${key}`}
                    type="checkbox"
                    checked={srs.enabledCardTypes[key] !== false}
                    onChange={(e) => updateCardTypeToggle(key, e.target.checked)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </section>

          <section className="panel">
            <span className="eyebrow">Išplėstiniai SM-2</span>
            <details>
              <summary>Rodyti parametrus</summary>
              <div className="advanced-srs-fields">
                <label htmlFor="srs-ease-factor">Pradinis lengvumas
                  <input
                    id="srs-ease-factor"
                    name="srs-ease-factor"
                    type="number"
                    min="1.3"
                    step="0.1"
                    value={srs.startingEaseFactor}
                    onChange={(e) => updateSrsSetting('startingEaseFactor', Number(e.target.value))}
                  />
                </label>
                <label htmlFor="srs-min-ease">Mažiausias lengvumas
                  <input
                    id="srs-min-ease"
                    name="srs-min-ease"
                    type="number"
                    min="1.0"
                    step="0.1"
                    value={srs.minimumEaseFactor}
                    onChange={(e) => updateSrsSetting('minimumEaseFactor', Number(e.target.value))}
                  />
                </label>
                <label htmlFor="srs-ease-penalty">Bauda už „Pakartoti“
                  <input
                    id="srs-ease-penalty"
                    name="srs-ease-penalty"
                    type="number"
                    min="0"
                    step="0.05"
                    value={srs.easePenaltyOnAgain}
                    onChange={(e) => updateSrsSetting('easePenaltyOnAgain', Number(e.target.value))}
                  />
                </label>
                <label htmlFor="srs-interval-mod">Intervalo daugiklis
                  <input
                    id="srs-interval-mod"
                    name="srs-interval-mod"
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={srs.intervalModifier}
                    onChange={(e) => updateSrsSetting('intervalModifier', Number(e.target.value))}
                  />
                </label>
              </div>
            </details>
            <div className="actions" style={{ marginTop: '1.5rem' }}>
              <button type="button" onClick={handleResetSrsDefaults}>
                Atkurti numatytuosius
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

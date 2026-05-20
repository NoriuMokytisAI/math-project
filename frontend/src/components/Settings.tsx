import React, { useState } from 'react';
import { State, SrsSettings } from '../types';
import { topics, concepts, exercises, tests } from '../content';
import {
  normalizeSrsSettings,
  DEFAULT_SRS_SETTINGS,
  exportProgress,
  importProgress,
  applySrsPreferences
} from '../systems';

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
            <label>Naujos kortelės per dieną
              <input
                type="number"
                min="0"
                step="1"
                value={srs.dailyNewLimit}
                onChange={(e) => updateSrsSetting('dailyNewLimit', Number(e.target.value))}
              />
            </label>
            <label>Kartojimai per dieną
              <input
                type="number"
                min="0"
                step="1"
                value={srs.dailyReviewLimit}
                onChange={(e) => updateSrsSetting('dailyReviewLimit', Number(e.target.value))}
              />
            </label>
            <label>Mokymosi žingsniai minutėmis
              <input
                value={srs.learningStepsMinutes.join(", ")}
                onChange={(e) => {
                  const arr = e.target.value.split(',').map((x) => Number(x.trim())).filter((x) => !isNaN(x) && x > 0);
                  updateSrsSetting('learningStepsMinutes', arr);
                }}
              />
            </label>
            <label>Baigimo intervalas dienomis
              <input
                type="number"
                min="1"
                step="1"
                value={srs.graduatingIntervalDays}
                onChange={(e) => updateSrsSetting('graduatingIntervalDays', Number(e.target.value))}
              />
            </label>
            <label>Maksimalus intervalas dienomis
              <input
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
                <label key={key} className="check">
                  <input
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
                <label>Pradinis lengvumas
                  <input
                    type="number"
                    min="1.3"
                    step="0.1"
                    value={srs.startingEaseFactor}
                    onChange={(e) => updateSrsSetting('startingEaseFactor', Number(e.target.value))}
                  />
                </label>
                <label>Mažiausias lengvumas
                  <input
                    type="number"
                    min="1.0"
                    step="0.1"
                    value={srs.minimumEaseFactor}
                    onChange={(e) => updateSrsSetting('minimumEaseFactor', Number(e.target.value))}
                  />
                </label>
                <label>Bauda už „Pakartoti“
                  <input
                    type="number"
                    min="0"
                    step="0.05"
                    value={srs.easePenaltyOnAgain}
                    onChange={(e) => updateSrsSetting('easePenaltyOnAgain', Number(e.target.value))}
                  />
                </label>
                <label>Intervalo daugiklis
                  <input
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

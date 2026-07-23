import React, { useEffect } from 'react';

export default function Datenschutz({ onBack, onOpenCookieBanner }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <div className="section-inner">
        <button onClick={onBack} className="legal-back-link">
          ← Zurück zur Startseite
        </button>
        <h1 className="serif">Datenschutzerklärung</h1>
        <p className="legal-updated">Stand: März 2026</p>

        <h2 className="serif">1. Datenschutz auf einen Blick</h2>
        <h3 className="serif">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
          sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
          Informationen zum Thema Datenschutz entnehmen Sie unserer nachstehenden
          Datenschutzerklärung.
        </p>

        <h3 className="serif">Datenerfassung auf dieser Website</h3>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
          Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser
          Datenschutzerklärung entnehmen.
        </p>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen – zum Beispiel über
          das Kontaktformular. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
          (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
          Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>

        <h2 className="serif">2. Hosting</h2>
        <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
        <h3 className="serif">Externes Hosting</h3>
        <p>
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
          erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a.
          um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
          Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert
          werden, handeln.
        </p>
        <p>
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen
          und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
          schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen
          Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2 className="serif">3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3 className="serif">Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation
          per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
          Zugriff durch Dritte ist nicht möglich.
        </p>

        <h3 className="serif">Hinweis zur verantwortlichen Stelle</h3>
        <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
        <p>
          Joeys Picknick Food Truck<br />
          Lisa Muster & Max Muster GbR<br />
          Musterstraße 12<br />
          55116 Mainz<br /><br />
          Telefon: <a href="tel:+491701234567">+49 170 123 4567</a><br />
          E-Mail: <a href="mailto:hallo@joeyspicknick.de">hallo@joeyspicknick.de</a>
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
          mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
          Namen, E-Mail-Adressen o. Ä.) entscheidet.
        </p>

        <h3 className="serif">Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
          verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
          entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
          Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
          zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
        </p>

        <h3 className="serif">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
          können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis
          zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <h3 className="serif">Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
          Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
          maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
          an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
          ist.
        </p>

        <h3 className="serif">Auskunft, Löschung und Berichtigung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
          unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
          Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbez Daten können
          Sie sich jederzeit an uns wenden.
        </p>

        <h2 className="serif">4. Datenerfassung auf dieser Website</h2>
        <h3 className="serif">Cookies</h3>
        <p>
          Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem
          Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher und
          effektiver zu gestalten.
        </p>
        <p>Wir setzen folgende Arten von Cookies ein:</p>
        <ul>
          <li>
            <strong>Notwendige Cookies:</strong> Diese sind für den Betrieb der Website erforderlich
            (z. B. Cookie-Consent-Einstellungen).
          </li>
          <li>
            <strong>Marketing-Cookies:</strong> Diese werden nur mit Ihrer ausdrücklichen Einwilligung
            gesetzt und ermöglichen die Einbindung externer Dienste wie Google Maps.
          </li>
        </ul>
        <p>
          Sie können Ihre Cookie-Einstellungen jederzeit über den{' '}
          <button
            onClick={onOpenCookieBanner}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent)',
              textDecoration: 'underline',
              fontWeight: 600,
              cursor: 'pointer',
              font: 'inherit',
              padding: 0
            }}
          >
            Cookie-Banner
          </button>{' '}
          auf der Startseite ändern.
        </p>

        <h3 className="serif">Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
          Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
          Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
          auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
          Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
          DSGVO).
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
          Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
          Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
          Aufbewahrungsfristen – bleiben unberührt.
        </p>

        <h2 className="serif">5. Externe Dienste & Drittanbieter</h2>
        <h3 className="serif">Google Maps</h3>
        <p>
          Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
          („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p>
          Google Maps wird erst nach Ihrer ausdrücklichen Einwilligung über den Cookie-Banner geladen.
          Erst nach Ihrer Zustimmung werden Daten an Google übertragen. Ohne Ihre Einwilligung findet
          keine Datenübertragung an Google statt.
        </p>
        <p>
          Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
          Google:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            https://policies.google.com/privacy
          </a>
        </p>

        <h3 className="serif">Google Fonts</h3>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts,
          die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die
          benötigten Fonts in Ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
        </p>
        <p>
          Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google
          aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese
          Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
          einheitlichen Darstellung des Schriftbildes auf seiner Website.
        </p>
        <p>
          Weitere Informationen zu Google Fonts finden Sie unter{' '}
          <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">
            https://developers.google.com/fonts/faq
          </a>{' '}
          und in der Datenschutzerklärung von Google:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            https://policies.google.com/privacy
          </a>
        </p>

        <h2 className="serif">6. Social Media</h2>
        <p>
          Auf unserer Website verlinken wir auf unsere Social-Media-Profile bei Instagram und
          Facebook. Es handelt sich dabei um einfache Verlinkungen, die erst beim Anklicken durch den
          Nutzer aktiviert werden. Es werden keine Daten automatisch an die Betreiber der
          Social-Media-Plattformen übertragen. Erst nach dem Klick auf den jeweiligen Link gelangen
          Sie auf die externe Plattform und es gelten die Datenschutzbestimmungen des jeweiligen
          Anbieters.
        </p>
      </div>
    </main>
  );
}

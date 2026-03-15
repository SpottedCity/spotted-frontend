import { Report } from '@/constants/map-data';
import { Popup } from 'react-leaflet';

interface ReportPopupProps {
  report: Report;
}

export default function ReportPopup({ report }: ReportPopupProps) {
  return (
    <Popup minWidth={220} maxWidth={280}>
      {/*
       * We use the standard HTML <img> tag here instead of Expo's <Image> component.
       * React-Leaflet renders popups into a separate, standard browser DOM node,
       * which bypasses the React Native layout enine.
       * Expo's <Image> relies on React Native Web's complex ecosystem, which breaks inside this Leaflet environment.
       */}
      <img
        src={report.imageUrl}
        alt={report.title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '15px'
        }}
      />

      <h3 style={{ margin: '0', marginTop: '20px', fontSize: '16px', color: '#0F172A ' }}>
        {report.title}
      </h3>
      <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '8px' }}>
        Dodano: {report.createdAt}
      </span>
      <p style={{ margin: '0', fontSize: '13px', color: '#475569', lineHeight: '1.4' }}>
        {report.description}
      </p>

      <div
        style={{
          padding: '12px 16px',
          display: 'flex',
          gap: '10px',
          marginTop: '8px',
          borderTop: '1px solid #F1F5F9',
          paddingTop: '10px'
        }}
      >
        <button
          style={{
            flex: 1,
            padding: '8px 0',
            borderRadius: '20px',
            border: '1.5px solid #86EFAC',
            backgroundColor: '#DCFCE7',
            color: '#166534',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'all 0.2s'
          }}
          onClick={() => console.log('Ale kliknięcie :O', report.id)}
        >
          👍 {report.upvotes}
        </button>
        <button
          style={{
            flex: 1,
            padding: '8px 0',
            borderRadius: '20px',
            border: '1.5px solid #FCA5A5',
            backgroundColor: '#FEE2E2',
            color: '#991B1B',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            transition: 'all 0.2s'
          }}
        >
          👎 {report.downvotes}
        </button>
      </div>
    </Popup>
  );
}

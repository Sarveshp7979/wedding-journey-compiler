
import { useState, useEffect } from 'react';

interface QRCodeProps {
  url: string;
  size?: number;
  title?: string;
}

const QRCode = ({ url, size = 180, title }: QRCodeProps) => {
  const [qrCodeSrc, setQrCodeSrc] = useState('');

  useEffect(() => {
    // Generate QR code using a free API
    const encodedUrl = encodeURIComponent(url);
    setQrCodeSrc(`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedUrl}`);
  }, [url, size]);

  return (
    <div className="flex flex-col items-center animate-fade-in-up">
      {title && <h3 className="text-xl font-medium mb-4 text-center">{title}</h3>}
      <div className="p-3 bg-white rounded-xl shadow-md">
        {qrCodeSrc && (
          <img 
            src={qrCodeSrc} 
            alt="QR Code" 
            width={size} 
            height={size} 
            className="rounded-md"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default QRCode;

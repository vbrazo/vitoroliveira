const DomainLogo = ({ domain }: { domain: string }) => {
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;

    return (
        <img 
        src={faviconUrl} 
        alt={`${domain} favicon`}
        className="w-4 h-4 rounded-sm"
        onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2NjYyIgZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPjwvc3ZnPg==';
        }}
        />
    );
};

export default DomainLogo;

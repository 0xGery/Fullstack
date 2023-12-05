import React, { useState, useEffect } from 'react';
import './ServiceSection.css';

function ServiceSection() {
    const [services, setServices] = useState([]);
    const [chains, setChains] = useState([]);
    const [selectedChain, setSelectedChain] = useState('');
    const [selectedServiceType, setSelectedServiceType] = useState('Relay');

    useEffect(() => {
        fetch('http://localhost:3001/api/chains')
            .then(response => response.json())
            .then(data => {
                setChains(data);
                const firstChain = data[0] || '';
                setSelectedChain(firstChain);
                fetchServices('Relay', firstChain);
            })
            .catch(error => console.error('Error fetching chains:', error));
    }, []);

    const fetchServices = (serviceType, chainName) => {
        let query = `?serviceType=${serviceType}`;
        if (chainName) query += `&chainName=${chainName}`;
    
        fetch(`http://localhost:3001/api/Service${query}`)
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    };
    
    const handleServiceTypeChange = (e) => {
        setSelectedServiceType(e.target.value);
        fetchServices(e.target.value, selectedChain);
    };
    
    const handleChainChange = (e) => {
        setSelectedChain(e.target.value);
        fetchServices(selectedServiceType, e.target.value);
    };
    
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => alert(`Copied: ${text}`)) // You can replace this with a more subtle notification
            .catch(err => console.error('Error copying text: ', err));
    };
    
    const renderServices = () => {
        if (services.length === 0) {
            return <p>No services available under the {selectedServiceType} category.</p>;
        }
    
        return services.map(service => (
            <div key={service._id} className="service-item">
                <h3>{service.chainName}</h3>
                {selectedServiceType === 'Relay' && (
                    <>
                        <p>Chain To: {service.chainTo}</p>
                        <img src={service.imageUrl} alt={`${service.chainName}`} />
                    </>
                )}
                {selectedServiceType === 'ChainService' && (
                    <>
                       {service.Installation && (
                        <a href={service.Installation} target="_blank" rel="noopener noreferrer" className="installation-link">
                            Installation
                        </a>
                    )}
                        <div>EndPoint:</div>
                        {Array.isArray(service.endPoints) ? (
                            <ul>
                                {service.endPoints.map((endPoint, index) => (
                                    <li key={index} className="copy-link" onClick={() => copyToClipboard(endPoint)}>
                                        {endPoint}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No endpoints available.</p>
                        )}
                        <img src={service.imageUrl} alt={`${service.chainName}`} />
                    </>
                )}
            </div>
        ));
    };

    const getTypeClassName = (type) => {
        return selectedServiceType === type ? "project-type-title selected" : "project-type-title";
    };
    
    return (
        <div className='container' id="sect-1">
            <div className="dropdowns-container">
                <select onChange={handleServiceTypeChange} value={selectedServiceType}>
                    <option value="Relay">Relayer</option>
                    <option value="ChainService">Chain Service</option>
                </select>
    
                <select onChange={handleChainChange} value={selectedChain}>
                    {chains.map(chain => (
                        <option key={chain} value={chain}>{chain}</option>
                    ))}
                </select>
            </div>
            <div className="project-container">
                {renderServices()}
            </div>
        </div>
    );    
}

export default ServiceSection;

import React, { useState, useEffect } from 'react';
import './ServiceSection.css';

function ServiceSection() {
    const [services, setServices] = useState([]);
    const [chains, setChains] = useState([]);
    const [selectedChain, setSelectedChain] = useState('');
    const [selectedServiceType, setSelectedServiceType] = useState('Relay');

    useEffect(() => {
        fetch('https://api.nocturnode.tech/api/chains')
            .then(response => response.json())
            .then(data => {
                setChains(data);
                setSelectedChain(data.length > 0 ? data[0] : '');
            })
            .catch(error => console.error('Error fetching chains:', error));

        fetchServices('Relay', selectedChain);
    }, [selectedChain]); 

    const fetchServices = (serviceType, chainName) => {
        let query = `?serviceType=${serviceType}`;
        if (chainName) query += `&chainName=${chainName}`;
    
        fetch(`https://api.nocturnode.tech/api/Service${query}`)
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
            .then(() => alert(`Copied: ${text}`)) 
            .catch(err => console.error('Error copying text: ', err));
    };
    
    const renderServices = () => {
        if (services.length === 0) {
            return <p className='NoService'>No services available under the {selectedServiceType} Service</p>;
        }
    
        return services.map(service => (
            <div key={service._id} className="service-item">
                <h3 className='ChainName'>{service.chainName}</h3>
                {selectedServiceType === "Tutorials" && (
                    <>
                        <p className='ServiceDesc'>{service.description}</p>
                        <p className='sTitle'>- One-line Installation:</p>
                        <p className='clickableUrl' onClick={() => copyToClipboard(service.Installation)}>{service.Installation}</p>
                        <p className='sTitle'>
                        - Check Details  
                        <a href={service.Github} target="_blank" rel="noopener noreferrer" className="github">
                            here
                        </a>.
                    </p>
                    </>
                )}
                {selectedServiceType === "Relay" && (
                    <>
                        <p>{service.relayData}</p>
                    </>
                )}
                {selectedServiceType === "EndPoint" && (
                    <>
                        <p>{service.endpointData}</p>
                    </>
                )}
                {selectedServiceType === "Delegator" && (
                    <>
                        <p>{service.delegatorData}</p>
                    </>
                )}
            </div>
        ));
    };
    

    const renderChainDropdown = () => {
        return chains.length > 0 ? (
            <select className='ChainL' onChange={handleChainChange} value={selectedChain}>
                {chains.map(chain => (
                    <option key={chain} value={chain}>{chain}</option>
                ))}
            </select>
        ) : (
            <select className='ChainL' disabled>
                <option>No Chain</option>
            </select>
        );
    };

    return (
        <div className='containerS' id="sect-1">
            <div className='rowS'>
                <div className='Service-section'>
                    <h2 className="TitleS">OUR SERVICES</h2>

                <div className="dropdowns-container">
                    <select className="ServiceL" onChange={handleServiceTypeChange} value={selectedServiceType}>
                        <option value="Relay">Relayer</option>
                        <option value="Tutorials">Tutorials</option>
                        <option value="EndPoint">End Point</option>
                        <option value="Delegator">Delegate</option>
                    </select>
                     {renderChainDropdown()}
                </div>
                    <div className="Service-container">
                        {renderServices()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;

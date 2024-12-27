import React from 'react';



const Dropdowns = ({ metric, device, setMetric, setDevice }) => {
    return (
        <div className="dropdowns-container">
            <div className="dropdown-wrapper">
                <label htmlFor="metric-dropdown">Metric</label> {/* Label for the metric dropdown */}
                <br></br>
                <select
                    id="metric-dropdown"
                    className="dropdown"
                    value={metric}
                    onChange={(e) => setMetric(e.target.value)}
                >
                    <option value="lcp">Largest Contentful Paint</option>
                    <option value="cls">Cumulative Layout Shift</option>
                </select>
            </div>

            <div className="dropdown-wrapper">
                <label htmlFor="device-dropdown">Device</label> {/* Label for the device dropdown */}
                <br></br>
                <select
                    id="device-dropdown"
                    className="dropdown"
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                >
                    <option value="desktop">Desktop</option>
                    <option value="mobile">Mobile</option>
                </select>
            </div>
        </div>
    );
}

export default Dropdowns;




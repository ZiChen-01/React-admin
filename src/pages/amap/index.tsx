import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker } from 'react-amap';
import './index.less'
const Amap: React.FC = () => {
    const markerEvents = {
        created: (mapInstance: any) => {

        }
    }

    return (
        <>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Map
                    amapkey='819e85bd8db8fb7dfd1dc86564972778'
                    plugins={['ToolBar']}
                    events={markerEvents}
                    rotateEnable={true}
                    viewMode='3D'
                    features={["bg", "road", "point"]}
                    />
            </div>
        </>
    )
}
export default Amap
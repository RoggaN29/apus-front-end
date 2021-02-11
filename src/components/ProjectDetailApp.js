import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import { DetailTab } from './detailTabs/DetailTab';
import { DevTab } from './detailTabs/DevTab';
import { PreProdTab } from './detailTabs/PreProdTab';
import { ProdTab } from './detailTabs/ProdTab';

export const ProjectDetailsApp = ({history}) => {

    const {projectId} =  useParams();

    const Tab = ({ children }) => {
        const { onClick } = useTabState();
        return <button onClick={onClick}>{children}</button>;
    };

    const Panel = ({ children }) => {
        const isActive = usePanelState();  
        return isActive ? <div>{children}</div> : null;
    };

    const handleBack = () => {
        history.replace('/projects');
    }

    return (
        <div>
            <Tabs>
                <div className="tabs">
                    <Tab>Detail</Tab>
                    <Tab>Dev</Tab>
                    <Tab>Pre-prod</Tab>
                    <Tab>Prod</Tab>
                </div>
                
                <div className="tab-content">
                    <Panel><DetailTab projectId = {projectId}/></Panel>
                    <Panel><DevTab /></Panel>
                    <Panel><PreProdTab /></Panel>
                    <Panel><ProdTab /></Panel>
                </div>
            </Tabs>
            <button className="button" onClick={handleBack}>Cancel</button>
            <button className="button" onClick={handleBack}>Update project</button>
        </div>
    )
}
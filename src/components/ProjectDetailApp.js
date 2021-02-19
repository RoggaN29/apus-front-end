import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import { DetailTab } from './detailTabs/DetailTab';
import { DevTab } from './detailTabs/DevTab';
import { PreProdTab } from './detailTabs/PreProdTab';
import { ProdTab } from './detailTabs/ProdTab';
import { useFetchProjects } from '../hooks/useFetchProjects';
import { getProjectById } from '../helpers/getProjectById';

export const ProjectDetailsApp = ({history}) => {

    const { projectId } =  useParams();
    const { projectsFiltered, loading } = useFetchProjects('');

    const initialForm = {
        name: '',
        description: '',
        scope: '',
        modelSupport: '',
        specialInstructions: '',
        complexity: '',
        department: '',
        tags: '',
        projectLead: '',
        projectLeadEmail : '',
        "status": "new"
    }
    
    const [project, setProject] = useState(initialForm);
    useEffect(() => {
        setProject( getProjectById(projectsFiltered, projectId) )
    }, [projectsFiltered, projectId])

    const Tab = ({ children }) => {
        const { onClick, isActive } = useTabState();
        return <button className={isActive ? 'active' : ''} onClick={onClick}>{children}</button>;
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
                    <Panel><DetailTab project={project}/></Panel>
                    <Panel><DevTab /></Panel>
                    <Panel><PreProdTab /></Panel>
                    <Panel><ProdTab /></Panel>
                </div>
            </Tabs>
            <div className="buttons-wrapper">
                <button className="button" onClick={handleBack}>Cancel</button>
                <button className="button" onClick={handleBack}>Update project</button>
            </div>
        </div>
    )
}
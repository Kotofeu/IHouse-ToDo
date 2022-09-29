import React, { useState, useEffect } from 'react';
import { TaskArticleListMemo } from '../TaskArticleList';
import MyTab from '../UI/MyTab/MyTab.jsx';
import MyTitle from '../UI/Title/MyTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { createWorker, fetchWorkers } from '../../API/workerAPI';
export default function Task() {
    // console.log('Task')
    const [workers, setWorkers] = useState([]);
    const [isHorizontal, setIsHorizontal] = useState(localStorage.getItem('isHorizontal'));
    useEffect(() => {
        localStorage.setItem('isHorizontal', isHorizontal ? 'True' : '');
    }, [isHorizontal]);
    useEffect(() => {
        document.title = 'Список задач';
        fetchWorkers().then(data => setWorkers(data.rows));
    }, []);

    const setAlignment = () => {
        setIsHorizontal(!isHorizontal);
    }
    return (
        <div className='task'>
            <div className='container'>
                <div className='task__inner'>
                    <header className='task__header'>
                        <MyTitle>Список задач</MyTitle>
                        <button className={`task__header-orientation-btn 
                            ${isHorizontal
                                ? 'task__header-orientation-btn--horizontal'
                                : ''
                            }`}
                            onClick={setAlignment} />
                    </header>
                    {workers.length ?
                        <Tabs>
                            <TabList className='task__tabs'>
                                {workers.map(worker =>
                                    <Tab key={worker.id}><MyTab>{worker.name}</MyTab></Tab>
                                )}
                            </TabList>
                            {workers.map(workers =>
                                <TabPanel key={workers.id}>
                                    <TaskArticleListMemo
                                        isHorizontal={isHorizontal}
                                        workerId={workers.id}
                                    />
                                </TabPanel>
                            )}
                        </Tabs>
                        : null
                    }

                </div>
            </div>

        </div>
    );
}
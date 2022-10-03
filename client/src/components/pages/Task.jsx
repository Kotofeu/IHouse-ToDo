import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { observer } from 'mobx-react-lite';

import MyTab from '../UI/MyTab/MyTab.jsx';
import MyTitle from '../UI/MyTitle/MyTitle';
import MyLoader from '../UI/MyLoader/MyLoader';
import MyError from '../UI/MyError/MyError';
import TaskArticleList from '../TaskArticleList';

import { fetchTodos } from '../../API/todosAPI';
import { fetchWorkers } from '../../API/workerAPI';
import useRequest from '../../hooks/useRequest';

import TodosStore from '../../store/TodosStore';

const Task = observer(() => {
    const [todos, todosLoading, todosError] = useRequest(fetchTodos);
    const [workers, workersLoading, workersError] = useRequest(fetchWorkers);
    useEffect(() => {
        TodosStore.setIsHorizontal(localStorage.getItem('isHorizontal'));
        TodosStore.setDefaultWorker(localStorage.getItem('defaultWorker'));
        document.title = 'Список задач';
    }, [])
    useEffect(() => {
        TodosStore.setTodos(todos);
        TodosStore.setWorkers(workers);
    }, [todos, workers]);
    const setAlignment = () => {
        TodosStore.setIsHorizontal(!TodosStore.isHorizontal);
        localStorage.setItem('isHorizontal', TodosStore.isHorizontal ? 'True' : '');
    }
    const setWorker = (id) => {
        let index = --id
        TodosStore.setDefaultWorker(index);
        localStorage.setItem('defaultWorker', index);
    }
    if (workersError || todosError) {
        return (<MyError>{[workersError, todosError].join(' ')}</MyError>);
    }
    if (workersLoading || todosLoading) {
        return (<MyLoader />);
    }
    return (
        <div className='task'>
            <div className='container'>
                <div className='task__inner'>
                    <header className='task__header'>
                        <MyTitle>Список задач</MyTitle>
                        <button className={`task__header-orientation-btn 
                            ${TodosStore.isHorizontal
                                ? 'task__header-orientation-btn--horizontal'
                                : ''
                            }`}
                            onClick={setAlignment} />
                    </header>
                    {TodosStore.workers.length ?
                        <Tabs defaultIndex={+TodosStore.defaultWorker}>
                            <TabList className='task__tabs'>
                                {TodosStore.workers.map(worker =>
                                    <Tab key={worker.id}
                                        onClick={() => setWorker(worker.id)}>
                                        <MyTab>{worker.name}</MyTab>
                                    </Tab>
                                )}
                            </TabList>
                            {TodosStore.workers.map(workers =>
                                <TabPanel key={workers.id}>
                                    <TaskArticleList
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
})
export default Task;
import React, { useState, useEffect } from 'react'
import { TaskArticleListMemo } from '../TaskArticleList'
import MyTab from '../UI/MyTab/MyTab.jsx'
import MyTitle from '../UI/Title/MyTitle'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
export default function Task() {
    // console.log('Task')
    const [task, setTask] = useState([
        {
            id: '1',
            name: 'Lorem ipsum dolor sit amet consectetur,',
            content: [{ text: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww' }, { text: 'Задача2' }, { text: 'Задача3' }]
        },
        {
            id: '2',
            name: 'Неделя',
            content: [{ text: 'xvcxvfvx' }, { text: 'Задача4' }, { text: 'Задача5' }, { text: 'Задача78' }, { text: 'Задача467' }, { text: 'Задача456' }, { text: 'Задача67' }
                , { text: 'Задfdача4' }, { text: 'Задbdbача5' }, { text: 'Задачаdfdh78' }, { text: 'Задачdfgа467' }, { text: 'Задача4vd56' }, { text: 'Задаhfhча67' }]

        },
        {
            id: '3',
            name: 'Потом',
            content: [{ text: 'xvамxvfvx' }, { text: 'сЗадача4' }, { text: 'Задачаа5' }, { text: 'Задвача78' }, { text: 'Задачаа467' }, { text: 'Задача4в56' }, { text: 'Задачаа67' }]
        },
        {
            id: '4',
            name: 'Никогда',
            content: [{ text: 'Задачываыав' }, { text: 'Задачаываываа8' }, { text: 'Задачываыаа9' }]
        }
    ])
    const [task1, setTask1] = useState([
        {
            id: '1',
            name: 'Артём1',
            content: [{ text: 'випатпатв втвапт' }, { text: 'Задача2ыпр ып' }, { text: 'Запыр ыпдача3' }]
        },
        {
            id: '2',
            name: 'Артём2',
            content: [{ text: 'xvcсxvfvx' }, { text: 'Задачмча4' }, { text: 'Замдача5' }, { text: 'Задачсча78' }, { text: 'Задача4м67' }, { text: 'Задаича456' }, { text: 'Задачсча67' }
                , { text: 'Задfмdача4' }, { text: 'Задbdbчача5' }, { text: 'Задачаdfмdh78' }, { text: 'Задаччdfgа467' }, { text: 'Задмача4vd56' }, { text: 'Задаhfhчм67' }]

        }
    ])
    const [task2, setTask2] = useState([
        {
            id: '1',
            name: 'Валера1',
            content: [{ text: 'випатпатв втвапт' }, { text: 'Задача2ыпр ып' }, { text: 'Запыр ыпдача3' }]
        },
        {
            id: '2',
            name: 'Валера2',
            content: [{ text: 'xvcсxvfvx' }, { text: 'Задачмча4' }, { text: 'Замдача5' }, { text: 'Задачсча78' }, { text: 'Задача4м67' }, { text: 'Задаича456' }, { text: 'Задачсча67' }
                , { text: 'Задfмdача4' }, { text: 'Задbdbчача5' }, { text: 'Задачаdfмdh78' }, { text: 'Задаччdfgа467' }, { text: 'Задмача4vd56' }, { text: 'Задаhfhчм67' }]
        }
    ])
    const [task3, setTask3] = useState([
    ])
    const [isHorizontal, setIsHorizontal] = useState(localStorage.getItem('isHorizontal'));

    useEffect(() => {
        localStorage.setItem('isHorizontal', isHorizontal ? 'True' : '')
    }, [isHorizontal])

    const setAlignment = () => {
        setIsHorizontal(!isHorizontal)
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
                    <Tabs>
                        <TabList className='task__tabs'>
                            <Tab><MyTab>Наталья</MyTab></Tab>
                            <Tab><MyTab>Артём</MyTab></Tab>
                            <Tab><MyTab>Валера</MyTab></Tab>
                            <Tab><MyTab>Данил</MyTab></Tab>
                        </TabList>
                        <TabPanel>
                            <TaskArticleListMemo
                                isHorizontal={isHorizontal}
                                task={task}
                                setTask={setTask} />
                        </TabPanel>
                        <TabPanel>
                            <TaskArticleListMemo
                                isHorizontal={isHorizontal}
                                task={task1}
                                setTask={setTask1} />
                        </TabPanel>
                        <TabPanel>
                            <TaskArticleListMemo
                                isHorizontal={isHorizontal}
                                task={task2}
                                setTask={setTask2} />
                        </TabPanel>
                        <TabPanel>
                            <TaskArticleListMemo
                                isHorizontal={isHorizontal}
                                task={task3}
                                setTask={setTask3} />
                        </TabPanel>
                    </Tabs>

                </div>
            </div>

        </div>
    )
}

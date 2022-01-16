import Chart from '../../components/Chart/Chart';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { UserData } from '../../dummyData.js';
import './home.css';

export default function Home () {
    return (
        <div className='home'>
            <Featuredinfo />
            <Chart data={UserData} title='User Analytics' grid dataKey='Active User' />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}



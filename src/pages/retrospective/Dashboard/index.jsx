import React from 'react';
import TableRowHead from '../../../components/table/rowHead';
import TableRow from '../../../components/table/row';
import Tracker from '../../../components/tracker-box'
import './index.css';

const RetrospectivePage = (props) => {
    const { content } = props;
    return (
        <div id="container">
            <header>
                <h1>EIGFOS Retrospectives</h1></header>
            <section id="retro-list-container">
                <h3>Recently Created</h3>
                <div className="retro-list">
                    <TableRowHead rowData={content[0]} />
                    {content.map((item, key) => {
                        return (
                            <TableRow {...props} rowData={item} key={`table-row-${key}`} />
                        )
                    })
                    }
                </div>
            </section>
            <div id="track-progress">
                <section class="improvement-tracker">
                    <Tracker content={["improvement point #1", "improvement point #2", "improvement point #3", "improvement point #4", "improvement point #5", "improvement point #6", "improvement point #7", "improvement point #8"]} head="Continuous Improvement Tracker" defaultChecked={false} />
                </section>
                <section class="accomplishment-tracker">
                    <Tracker content={["achieved point #1", "achieved point #2", "achieved point #3", "achieved point #4", "achieved point #5", "achieved point #6", "achieved point #7", "achieved point #8"]} head="Achievement" defaultChecked={true} />
                </section>
            </div>
        </div>
    )
}
export default RetrospectivePage;
import React from 'react';
import * as style from '../App.less';
import { Table } from 'semantic-ui-react';

const Data = (props) => {
    return (
        <div className={style.Table}>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>File</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Version</Table.HeaderCell>
                        <Table.HeaderCell>Source</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {props.currentFiles.map(file => {
                        return (
                            <Table.Row key={file.id} className={style.Row}>
                                <Table.Cell>{file.file}</Table.Cell>
                                <Table.Cell>{file.type}</Table.Cell>
                                <Table.Cell>{file.version}</Table.Cell>
                                <Table.Cell>{file.commit.source}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Data;
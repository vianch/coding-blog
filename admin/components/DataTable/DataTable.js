import { useState } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

/* Constants */
import { oderTypes } from '~/core/constants';

/* Utils */
import { timeStampToDate } from "~/utils/data.utils";

/* Components */
import TableHeader from '~/components/DataTable/TableHeader';

const DataTable = ({ tableData }) => {
  const [order, setOrder] = useState(oderTypes.ascendant);
  const [oderBy, setOrderBy] = useState('');

  const handleRequestSort = (event, property) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const isAscendant = oderBy === property && order === oderTypes.ascendant;
    setOrder(isAscendant ? oderTypes.descent : oderTypes.ascendant);
    setOrderBy(property);
  };

  return (
    <div style={{ width: '100%' }}>
      <Paper>
        <TableContainer>
          <Table size="medium">
            <TableHeader
              order={order}
              orderBy={oderBy}
              onRequestSort={handleRequestSort}
            />

            {tableData && tableData.length > 0 && (
              <TableBody>
                {tableData.map(data => (
                  <TableRow key={`id_${data.id}`}>
                    <TableCell>{data.id}</TableCell>

                    <TableCell>{data.title}</TableCell>

                    <TableCell>{timeStampToDate(data.dateTimestamp)}</TableCell>

                    <TableCell>{data.state || ''}</TableCell>

                    <TableCell>
                      {data.tags.map(tag => (
                        <span key={`id_${tag}`}>{tag}</span>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

DataTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;

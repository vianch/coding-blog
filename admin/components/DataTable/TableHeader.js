import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import { oderTypes } from '~/core/constants';

const TableHeader = ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  const headCells = [
    {
      id: 'id',
      numeric: false,
      disablePadding: false,
      label: 'Id',
    },
    {
      id: 'postName',
      numeric: false,
      disablePadding: false,
      label: 'Post name',
    },
    { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'state', numeric: false, disablePadding: false, label: 'State' },
    {
      id: 'labels',
      numeric: false,
      disablePadding: false,
      label: 'Labels',
    },
  ];

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            variant='head'
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : oderTypes.ascendant}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span>
                  {order === oderTypes.descent
                    ? 'sorted descending'
                    : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf([oderTypes.ascendant, oderTypes.descent]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default TableHeader;

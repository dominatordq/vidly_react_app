import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items) // converts to a lodash wrapper
        .slice(startIndex)   // and slices array at startIndex.
        .take(pageSize)
        .value();   // returns normal array of paginated values
     
}
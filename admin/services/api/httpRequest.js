import isNil from 'lodash/isNil';
import merge from 'lodash/merge';
import omitBy from 'lodash/omitBy';
import get from 'lodash/get';

import { httpCodes } from '~/core/constants';
import { logger } from '~/config/logger';

const httpRequest = async ({
  api,
  body = null,
  headers,
  method,
  query,
  url,
}) => {
  let resp = { success: false };
  const params = omitBy(query, (value) => isNil(value));

  try {
    const response = await api({
      data: body,
      headers: merge({}, api.defaults.headers, headers),
      method,
      params,
      url,
    });

    const payload = get(response, 'data', null);
    const status = get(response, 'status', httpCodes.ok);

    resp = { success: true, payload, status };
  } catch (error) {
    const data = get(error, 'response.data', null);
    const status = get(error, 'response.status', httpCodes.serverError);
    const message = get(data, 'message', null);

    resp = { success: false, error: data, status };

    if (message) {
      logger.error(`Error calling url: ${url}, error: ${message}`);
    } else {
      logger.error(`Error calling url: ${url}, error: ${error}`);
    }
  }

  return resp;
};

export default httpRequest;

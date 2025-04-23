import axios from 'axios';
import { expect } from 'chai';

describe('FopHelp API', () => {
  it('should return FOP data by name', async () => {
    const response = await axios.post('https://new.fophelp.pro/api/search', {
      text: 'Іванов'
    });
    expect(response.status).to.equal(200);
    expect(response.data.results.length).to.be.greaterThan(0);
  });
});

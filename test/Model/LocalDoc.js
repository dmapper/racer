import {expect} from '../util';
import LocalDoc from '../../lib/Model/LocalDoc';
import docs from './docs';

describe('LocalDoc', function() {
  function createDoc() {
    var modelMock = {
      data: {
        _colors: {}
      }
    };
    return new LocalDoc(modelMock, '_colors', 'green');
  }
  describe('create', function() {
    it('should set the collectionName and id properties', function() {
      var doc = createDoc();
      expect(doc.collectionName).to.equal('_colors');
      expect(doc.id).to.equal('green');
    });
  });
  docs(createDoc);
});

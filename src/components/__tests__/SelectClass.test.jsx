import { React } from 'react';
import { mount } from 'enzyme';
import SelectClass from '../SelectClass';

describe('SelectClass tests', () => {
  let wrapper;
  let selectedClass = null;

  beforeEach(() => {
    wrapper = mount(<SelectClass
      classes={[]}
      selectedClass={selectedClass}
      setSelectedClass={(classId) => { selectedClass = classId; }}
      isDatasetReady={false}
      fetchingClassAndEpochs={false}
      datasetSelected={false}
    />);
  });

  test('Selected class should null when no classes', () => {
    expect(selectedClass).toEqual(null);
  });

  test('Select form loading should depend on fetching class/epochs state', () => {
    // Simulate awaiting class and epochs
    wrapper.setProps({
      fetchingClassAndEpochs: true,
    });
    expect(wrapper.find('Select').prop('loading')).toEqual(true);

    // Simulate class and epochs fetched
    wrapper.setProps({
      fetchingClassAndEpochs: false,
    });

    expect(wrapper.find('Select').prop('loading')).toEqual(false);
  });

  test(
    'Select form disabled should depend on fetchingClassAndEpochs, datasetSelected, isDatasetReady',
    () => {
      // All props disabling
      wrapper.setProps({
        fetchingClassAndEpochs: true,
        datasetSelected: false,
        isDatasetReady: false,
      });
      expect(wrapper.find('Select').prop('disabled')).toEqual(true);

      // No props disabling
      wrapper.setProps({
        fetchingClassAndEpochs: false,
        datasetSelected: true,
        isDatasetReady: true,
      });
      expect(wrapper.find('Select').prop('disabled')).toEqual(false);

      // fetchingClassAndEpochs disabling
      wrapper.setProps({
        fetchingClassAndEpochs: true,
        datasetSelected: true,
        isDatasetReady: true,
      });
      expect(wrapper.find('Select').prop('disabled')).toEqual(true);

      // datasetSelected disabling
      wrapper.setProps({
        fetchingClassAndEpochs: false,
        datasetSelected: false,
        isDatasetReady: true,
      });
      expect(wrapper.find('Select').prop('disabled')).toEqual(true);

      // isDatasetReady disabling
      wrapper.setProps({
        fetchingClassAndEpochs: false,
        datasetSelected: true,
        isDatasetReady: false,
      });
      expect(wrapper.find('Select').prop('disabled')).toEqual(true);
    },
  );
});

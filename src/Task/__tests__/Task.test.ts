import { TaskAdapter } from '..';

const backEndTask = {
  id: '1234',
  type: 'TASK',
  taskDetail: {
    foo: 34,
    bar: 56,
    baz: [
      'a','b', { c: 67 },
    ]
  }
};

const backEndReport = {
  id: '1XYZ - ALERT - USER STUFF',
  type: 'REPORT',
  reportDetail: {
    foo: 34,
    bar: 56,
    baz: [
      'a','b', { c: 99 },
    ]
  }
};

describe('Task', () => {
  it('Should convert a Task to FETask', () => {
    const hash = TaskAdapter.toFrontEnd(backEndTask as any);
    expect(hash).toMatchSnapshot();
  });

  it('Should convert a Report to FEReport', () => {
    const hash = TaskAdapter.toFrontEnd(backEndReport as any);
    expect(hash).toMatchSnapshot();
  });

  it('Should convert a FEReport to a BEReport', () => {
    const {reportDetail:detail, ...report} = backEndReport;
    const hash = TaskAdapter.toBackEnd({...report, detail, hash:'abc123'} as any);
    expect(hash).toMatchSnapshot();
  });
})
import {toggleItemFrom} from './index';

describe('toggleItemFrom function', () => {
  it('should return an array', () => {
    const list = toggleItemFrom()();

    expect(list).toEqual(expect.any(Array));
  });
  it('select a item from the input array / list', () => {
    const previusList = [
      {id: 3, isSelected: false},
      {id: 4, isSelected: false},
      {id: 5, isSelected: false},
    ];
    const selectedIndex = 1;
    const list = toggleItemFrom(previusList)(selectedIndex);

    expect(list).toEqual([
      {id: 3, isSelected: false},
      {id: 4, isSelected: true},
      {id: 5, isSelected: false},
    ]);
  });
  it('unselect a item from the input array / list', () => {
    const previusList = [
      {id: 3, isSelected: false},
      {id: 4, isSelected: true},
      {id: 5, isSelected: false},
    ];
    const selectedIndex = 1;
    const list = toggleItemFrom(previusList)(selectedIndex);

    expect(list).toEqual([
      {id: 3, isSelected: false},
      {id: 4, isSelected: false},
      {id: 5, isSelected: false},
    ]);
  });
});

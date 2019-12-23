const toggleItemFrom = list => selectedIndex => {
  if (list === undefined || selectedIndex === undefined) {
    return [];
  }

  return [
    ...[...list].splice(0, selectedIndex),
    {
      ...list[selectedIndex],
      isSelected: !list[selectedIndex].isSelected,
    },
    ...[...list].splice(selectedIndex + 1, list.length),
  ];
};
export {toggleItemFrom};

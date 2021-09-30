function menCatagoryCheck(catagory) {
  let text = '';

  switch (catagory) {
    case 't-shirt':
      text = 'T-Shirt';
      break;
    case 'shirt':
      text = 'Shirt';
      break;
    case 'jeans':
      text = 'Jeans';
      break;
    case 'watch':
      text = 'Watch';
      break;
    default:
      break;
  }
  return text;
}

module.exports = { menCatagoryCheck };

function womenCatagoryCheck(catagory) {
  let text = '';

  switch (catagory) {
    case 't-shirt':
      text = 'T-Shirt';
      break;
    case 'kurti':
      text = 'Kurti';
      break;
    case 'jeans':
      text = 'Jeans';
      break;
    case 'saree':
      text = 'Saree';
      break;
    default:
      break;
  }
  return text;
}

module.exports = { womenCatagoryCheck };

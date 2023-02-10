const generateOTP = (length) => {
  const digits = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += digits[Math.floor(Math.random() * 10)];
  }
  return result;
};

const value = prompt('Enter your length of otp');
console.log(generateOTP(value));

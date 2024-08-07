// export const generateToken = (user, message, statusCode, res) => {
//     const token = user.generateJsonWebToken();
//     res
//       .status(statusCode)
//       .cookie("token", token, {
//         expires: new Date(
//           Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//         ),
//         httpOnly: true
//       })
//       .json({
//         success: true,
//         message,
//         token,
//         user,
//       });
//   };

export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  const maxAge = process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000;

  console.log('Setting token cookie with maxAge:', maxAge);

  res
      .status(statusCode)
      .cookie("token", token, {
          maxAge,
          httpOnly: true,
      })
      .json({
          success: true,
          message,
          token,
          user,
      });
};

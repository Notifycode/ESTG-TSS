// code to make logout functionality
exports.logout = async (req, res) => {
    try {
      req.session.destroy();
      res.send("Logged out successfully");
    } catch (error) {
      res.status(500).send({ message: 'Error logging out', error });
    }
  }
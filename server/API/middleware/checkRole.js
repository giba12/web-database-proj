export const checkRole = (role) => {
    return (req, res, next) => {
      if (!req.user || !req.user.role) {
        return res.status(403).json({ message: 'Access Denied: Role Not Found' });
      }
  
      // Check if the user's role matches the required role
      if (req.user.role !== role) {
        return res.status(403).json({ message: `Access Denied: Requires ${role} Role` });
      }
  
      next();  // Allow the request to proceed
    };
  };
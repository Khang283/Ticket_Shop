const db = require('../db/models/index');

class UserProfileController {
    getUserProfile = async (req, res, next) => {
        try {
            const userId = req.id; // Lấy id của user từ decoded token đã được xử lý ở middleware verifyToken

            // Tìm thông tin user trong cơ sở dữ liệu
            const user = await db.User.findOne({
                where: {
                    id: userId
                },
                attributes: ['id', 'username', 'fullName', 'gender', 'dob', 'address', 'email', 'phoneNumber']
                // Điều chỉnh attributes để chỉ lấy những thông tin cần thiết của user
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Trả về thông tin user
            return res.status(200).json(user);
        } catch (error) {
            console.error('Error fetching user profile:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    };
}

module.exports = new UserProfileController();

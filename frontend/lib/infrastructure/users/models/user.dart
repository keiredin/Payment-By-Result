// ignore_for_file: file_names

class User {
  final String? id;
  final String? name;
  final String? role;
  final bool? isActive;
  final DateTime? dateOfBirth;
  final DateTime? createdAt;
  final String? email;
  final String? password;
  final String? phoneNumber;
  final String? speciality;

  User({
    required this.id,
    required this.name,
    required this.role,
    this.dateOfBirth,
    this.createdAt,
    this.isActive,
    this.email,
    this.password,
    this.phoneNumber,
    this.speciality,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      role:  json['role'],
      isActive:  json['isActive'],
      id:  json['_id'],
      name:  json['name'],
      dateOfBirth:  json['dateOfBirth'],
      createdAt:  json['createdAt'],
      email:  json['email'],
      password:  json['password'],
      phoneNumber:  json['phoneNumber'],
      speciality:  json['speciality'],
    );
  }
}

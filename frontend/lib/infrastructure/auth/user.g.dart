// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_User _$_$_UserFromJson(Map<String, dynamic> json) {
  return _$_User(
    id: json['id'] as String,
    email: json['email'] as String,
    password: json['password'] as String,
    profilePicture: json['profilePicture'] as String,
    dob: DateTime.parse(json['dob'] as String),
    phoneNumber: json['phoneNumber'] as String,
    role: json['role'] as String,
  );
}

Map<String, dynamic> _$_$_UserToJson(_$_User instance) => <String, dynamic>{
      'id': instance.id,
      'email': instance.email,
      'password': instance.password,
      'profilePicture': instance.profilePicture,
      'dob': instance.dob.toIso8601String(),
      'phoneNumber': instance.phoneNumber,
      'role': instance.role,
    };

import 'package:dartz/dartz.dart';
import './auth_failure.dart';
import '../../infrastructure/auth/user.dart';

import 'value_objects.dart';

abstract class IAuthFacade {
  Future<Option<String>> getToken();
  Future<Option<User>> getSignedInUser();
  Future<Either<AuthFailure, Unit>> registerWithEmailAndPassword({
    required EmailAddress emailAddress,
    required Password password,
  });
  Future<Either<AuthFailure, Unit>> signInWithEmailAndPassword({
    required EmailAddress emailAddress,
    required Password password,
  });
  Future<Either<User, User>> checkIfUserExists(
      {required EmailAddress emailAddress});
  Future<void> signOut();
}

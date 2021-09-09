import './../data_providers/auth_data_provider.dart';
import './../models/models.dart';


class AuthRepository {
  final AuthDataProvider dataProvider;
  AuthRepository(this.dataProvider);

  Future<SignUp> create(SignUp user,String url) async {
    return this.dataProvider.create(user, url);
  }
  Future<SignIn> login(SignIn user,String url) async {
    return this.dataProvider.login(user, url);
  }
}
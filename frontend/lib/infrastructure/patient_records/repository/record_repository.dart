import 'package:frontend/domain/auth/user.dart';

import './../data_providers/record_data_provider.dart';
import './../models/record.dart';


class CourseRepository {
  final UsersDataProvider dataProvider;
  CourseRepository(this.dataProvider);

  Future<UserRecord> create(UserRecord record,String url) async {
    return this.dataProvider.create(record, url);
  }

  Future<UserRecord> fetchById(String url) async {
    return this.dataProvider.fetchById(url);
  }

  Future<UserRecord> fetchAll(String url) async {
    return this.dataProvider.fetchAll(url);
  }
}
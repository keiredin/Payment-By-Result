import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:logger/logger.dart';

import './../models/sign_up.dart';
import './../models/sign_in.dart';

class AuthDataProvider {
  // A function that converts a response body in a List
  List<SignUp> parseSignUps(String responseBody) {
    final parsed = jsonDecode(responseBody).cast<Map<String, dynamic>>();

    return parsed.map<SignUp>((json) => SignUp.fromJson(json)).toList();
  }

  static final String _baseUrl = "http://localhost:3000/api/v1/auth";
  var logger = Logger();


  Future<SignUp> create(SignUp user, String url) async {
    url = formater(url);
    final http.Response response = await http.post(Uri.parse(url),
        headers: <String, String>{
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: jsonEncode({
          "name": user.name,
          "role": user.role,
          "email": user.email,
          "password": user.password
        }));

    if (response.statusCode == 201) {
      logger.i(response.statusCode);
      logger.i(response.body);
      return SignUp.fromJson(jsonDecode(response.body));
    }
    {
      throw Exception("Failed to create user");
    }
  }


  Future<SignIn> login(SignIn user, String url) async {
    url = formater(url);
    final http.Response response = await http.post(Uri.parse(url),
        headers: <String, String>{"Content-Type": "application/json"},
        body: jsonEncode({
          "email": user.name,
          "password": user.password,
        }));

    if (response.statusCode == 201) {
      return SignIn.fromJson(jsonDecode(response.body));
    }
    {
      throw Exception("Failed to signin");
    }
  }

  String formater(String url) {
    return _baseUrl + url;
  }
}

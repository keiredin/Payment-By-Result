import 'package:flutter/material.dart';
import 'package:frontend/presentation/core/profile_page.dart';
import 'package:frontend/presentation/core/record_detail_page.dart';
import 'package:frontend/presentation/doctors/doctors_home_page.dart';
import 'package:frontend/presentation/doctors/patient_detail_page.dart';
import 'package:frontend/presentation/patients/patients_home_page.dart';

import 'edit_profile_page.dart';


class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "PBR",
      theme: ThemeData(fontFamily: 'Inter'),
      home: RecordDetailPage(),
    );
  }
}

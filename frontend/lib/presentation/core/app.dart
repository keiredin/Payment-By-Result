import 'dart:html';

import 'package:flutter/material.dart';


class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "PBR",
      theme: ThemeData(fontFamily: 'Inter'),
      home: Container(),
    );
  }
}

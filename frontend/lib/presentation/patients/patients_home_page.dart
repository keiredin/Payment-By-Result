import 'package:flutter/material.dart';
import 'package:frontend/presentation/colors.dart';
import 'package:frontend/presentation/core/widgets/action_bar.dart';
import 'package:frontend/presentation/core/home_page.dart';
import 'package:frontend/presentation/core/widgets/tab_view.dart';
import 'package:frontend/presentation/doctors/widgets/records_list_view.dart';

class PatientsHomePage extends StatelessWidget {
  const PatientsHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: BACKGROUND_COLOR,
      body: SafeArea(
        child: HomePage(
          tabView: TabView(
            length: 2,
            tabBarView:
                TabBarView(children: [RecordsListView(), RecordsListView()]),
            tabs: ['History', 'Due'],
            headerText: 'Home',
            actionBar: ActionBar(
              trailingIcon: Icons.search_sharp,
              onTrailingPressed: () {},
            ),
          ),
        ),
      ),
    );
  }
}
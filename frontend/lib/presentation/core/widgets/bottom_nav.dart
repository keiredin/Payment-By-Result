import 'package:flutter/material.dart';
import 'package:frontend/presentation/colors.dart';

class BottomNav extends StatelessWidget {
  const BottomNav({
    Key? key,
    this.size = 27,
    required this.children,
    this.color = Colors.white,
    this.height,
  }) : super(key: key);
  final double size;
  final List<IconData> children;
  final Color color;
  final double? height;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: height,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: children
            .map(
              (icon) => IconButton(
                onPressed: () {},
                icon: Icon(
                  icon,
                  color: color,
                  size: size,
                ),
              ),
            )
            .toList(),
      ),
    );
  }
}

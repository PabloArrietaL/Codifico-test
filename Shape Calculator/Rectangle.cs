using System;
using System.Drawing;

namespace Shape_Calculator
{
    class Rectangle : Shape
    {
        public Rectangle(Point p1, Point p2)
        {
            this.P1 = p1;
            this.P2 = p2;
        }

        public override double GetArea()
        {
            double b = Math.Sqrt(Math.Pow(P2.X - P1.X, 2) + Math.Pow(P1.Y - P1.Y, 2));
            double h = Math.Sqrt(Math.Pow(P2.X - P2.X, 2) + Math.Pow(P1.Y - P2.Y, 2));
            return b*h;
        }
    }
}

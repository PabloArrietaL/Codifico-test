using System;
using System.Drawing;

namespace Shape_Calculator
{
    class Circle : Shape
    {
        public Circle(Point p1, Point p2)
        {
            this.P1 = p1;
            this.P2 = p2;
        }

        public override double GetArea()
        {
            double r = Math.Sqrt(Math.Pow(P2.X - P1.X, 2));
            return Math.PI * Math.Pow(r, 2);
        }
    }
}

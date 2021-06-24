using System;
using System.Drawing;

namespace Shape_Calculator
{
    abstract class Shape
    {

        public Point P1 { get; set; }
        public Point P2 { get; set; }

        public virtual double GetArea() => 0;
    }
}

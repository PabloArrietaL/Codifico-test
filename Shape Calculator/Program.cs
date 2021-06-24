using System;
using System.Drawing;

namespace Shape_Calculator
{
    class Program
    {
        static void Main()
        {

            string option;
            Point p1 = new Point(0,0);
            Point p2 = new Point(0,0);
            Console.WriteLine("Calculate area");
            Console.WriteLine("1. Rectangle");
            Console.WriteLine("2. Circle");
            Console.Write("Select a figure: ");
            option = Console.ReadLine();
            Shape shape = null;
            switch (option)
            {
                case "1": Console.WriteLine("Set Point 1");
                    Console.Write("X1: ");
                    p1.X = Int32.Parse(Console.ReadLine());
                    Console.Write("Y1: ");
                    p1.Y = Int32.Parse(Console.ReadLine());
                    Console.WriteLine("Set Point 2");
                    Console.Write("X2: ");
                    p2.X = Int32.Parse(Console.ReadLine());
                    Console.Write("Y2: ");
                    p2.Y = Int32.Parse(Console.ReadLine());
                    shape = new Rectangle(p1, p2);
                    break;
                case "2":
                    Console.WriteLine("Set Point 1");
                    Console.Write("X1: ");
                    p1.X = Int32.Parse(Console.ReadLine());
                    p1.Y = 0;
                    Console.WriteLine("Set Point 2");
                    Console.Write("X2: ");
                    p2.X = Int32.Parse(Console.ReadLine());
                    p2.Y = 0;
                    shape = new Circle(p1, p2);
                    break;
            }

            Console.WriteLine($"Area: {shape.GetArea()}");
            Console.Read();
        }
    }
}

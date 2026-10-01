package exercises.shapes;

import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class ShapesTest {
    @Test
    void circleArea() {
        assertEquals(Math.PI, new Circle(1.0).area(), 0.001);
    }

    @Test
    void rectangleArea() {
        assertEquals(6.0, new Rectangle(2.0, 3.0).area(), 0.001);
    }

    @Test
    void totalAreaMixesShapes() {
        List<Shape> shapes = List.of(new Circle(1.0), new Rectangle(2.0, 3.0));
        assertEquals(Math.PI + 6.0, Shapes.totalArea(shapes), 0.001);
    }
}

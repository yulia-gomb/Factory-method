import { ConeFileReader } from '@/utils/FileReader/ConeFileReader';
import { TriangleFileReader } from '@/utils/FileReader/TriangleFileReader';
import {ConeCalculator} from "@/utils/Calculator/ConeCalculator.ts";
import {TriangleCalculator} from "@/utils/Calculator/TriangleCalculator.ts";


async function main() {
    console.log('=== Application Started ===\n');

    // 1. Инициализация
    const coneReader = new ConeFileReader();
    const triangleReader = new TriangleFileReader();
    const coneCalculator = new ConeCalculator();
    const triangleCalculator = new TriangleCalculator();

    // 2. Чтение файлов
    console.log('Reading cones.txt...');
    const cones = await coneReader.read('/cones.txt');

    console.log('\nReading triangles.txt...');
    const triangles = await triangleReader.read('/triangles.txt');

    // 3. Вывод результатов
    console.log('\n=== Results ===');

    // Конусы
    console.log('\nCones:');
    cones.forEach(cone => {
        console.log(`- ID: ${cone.id}`);
        console.log(`  Base: (${cone.baseCenter.x},${cone.baseCenter.y},${cone.baseCenter.z})`);
        console.log(`  Apex: (${cone.apex.x},${cone.apex.y},${cone.apex.z})`);
        console.log(`  Radius: ${cone.baseRadius}`);
        console.log(`  Volume: ${coneCalculator.calculateVolume(cone).toFixed(2)}`);
    });

    // Треугольники
    console.log('\nTriangles:');
    triangles.forEach(triangle => {
        console.log(`- ID: ${triangle.id}`);
        console.log(`  Points: A(${triangle.pointA.x},${triangle.pointA.y},${triangle.pointA.z}) ` +
            `B(${triangle.pointB.x},${triangle.pointB.y},${triangle.pointB.z}) ` +
            `C(${triangle.pointC.x},${triangle.pointC.y},${triangle.pointC.z})`);
        console.log(`  Area: ${triangleCalculator.calculateArea(triangle).toFixed(2)}`);
    });

    // Статистика
    console.log('\n=== Summary ===');
    console.log(`Valid cones: ${cones.length}`);
    console.log(`Valid triangles: ${triangles.length}`);
    console.log('\n=== Application Finished ===');
}

main().catch(console.error);

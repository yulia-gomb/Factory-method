import { ConeFileReader } from '@/utils/FileReader/ConeFileReader';
import { TriangleFileReader } from '@/utils/FileReader/TriangleFileReader';
import {ConeCalculator} from "@/utils/Calculator/ConeCalculator.ts";
import { TriangleCalculator } from "@/utils/Calculator/TriangleCalculator.ts";
import logger from '@/logger';


async function main() {
    logger.info('=== Application Started ===\n');

    // 1. Initialization
    const coneReader = new ConeFileReader();
    const triangleReader = new TriangleFileReader();
    const coneCalculator = new ConeCalculator();
    const triangleCalculator = new TriangleCalculator();

    // 2. Reading files
    logger.info('Reading cones.txt...');
    const cones = await coneReader.read('/cones.txt');

    logger.info('\nReading triangles.txt...');
    const triangles = await triangleReader.read('/triangles.txt');

    // 3. Results
    logger.info('\n=== Results ===');

    // Triangles
    logger.info('\nTriangles:');
    triangles.forEach(triangle => {
        logger.info(`- ID: ${triangle.id}`);
        logger.info(`  Points: A(${triangle.pointA.x},${triangle.pointA.y},${triangle.pointA.z}) ` +
            `B(${triangle.pointB.x},${triangle.pointB.y},${triangle.pointB.z}) ` +
            `C(${triangle.pointC.x},${triangle.pointC.y},${triangle.pointC.z})`);
        logger.info(`  Area: ${triangleCalculator.calculateArea(triangle).toFixed(2)}`);
    });

    // Cones
    logger.info('\nCones:');
    cones.forEach(cone => {
        logger.info(`- ID: ${cone.id}`);
        logger.info(`  Base: (${cone.baseCenter.x},${cone.baseCenter.y},${cone.baseCenter.z})`);
        logger.info(`  Apex: (${cone.apex.x},${cone.apex.y},${cone.apex.z})`);
        logger.info(`  Radius: ${cone.baseRadius}`);
        logger.info(`  Volume: ${coneCalculator.calculateVolume(cone).toFixed(2)}`);
    });

    // Statistics
    logger.info('\n=== Summary ===');
    logger.info(`Valid cones: ${cones.length}`);
    logger.info(`Valid triangles: ${triangles.length}`);
    logger.info('\n=== Application Finished ===');
}

main().catch(logger.error);
